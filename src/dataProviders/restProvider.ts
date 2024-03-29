/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';

const restProvider = (
  apiUrl: string,
  httpClient = fetchUtils.fetchJson
): DataProvider => ({
  getList: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      ...fetchUtils.flattenObject(params.filter),
      sort: field,
      order: order,
      skip: (page - 1) * perPage,
      limit: page * perPage
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;

    return httpClient(url).then(({ headers, json }) => {
      if (!headers.has('x-content-range')) {
        throw new Error(
          'The X-Content-Range header is missing in the HTTP Response. The jsonServer Data Provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare X-Content-Range in the Access-Control-Expose-Headers header?'
        );
      }
      return {
        // data: json.data,
        data: json.data.map((resource) => ({
          ...resource,
          id: resource.ref_id
        })),
        total: parseInt(headers.get('x-content-range').split('/').pop(), 10)
      };
    });
  },

  getOne: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
      data: json
    })),

  getMany: (resource, params) => {
    const query = {
      id: params.ids
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    return httpClient(url).then(({ json }) => ({ data: json }));
  },

  getManyReference: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      ...fetchUtils.flattenObject(params.filter),
      [params.target]: params.id,
      sort: field,
      order: order,
      skip: (page - 1) * perPage,
      limit: page * perPage
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;

    return httpClient(url).then(({ headers, json }) => {
      if (!headers.has('x-content-range')) {
        throw new Error(
          'The X-Content-Range header is missing in the HTTP Response. The jsonServer Data Provider expects responses for lists of resources to contain this header with the total number of results to build the pagination. If you are using CORS, did you declare X-Content-Range in the Access-Control-Expose-Headers header?'
        );
      }
      return {
        data: json,
        total: parseInt(headers.get('x-content-range').split('/').pop(), 10)
      };
    });
  },

  update: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: 'PUT',
      body: JSON.stringify(params.data)
    }).then(({ json }) => ({ data: json })),

  // json-server doesn't handle filters on UPDATE route, so we fallback to calling UPDATE n times instead
  updateMany: (resource, params) =>
    Promise.all(
      params.ids.map((id) =>
        httpClient(`${apiUrl}/${resource}/${id}`, {
          method: 'PUT',
          body: JSON.stringify(params.data)
        })
      )
    ).then((responses) => ({ data: responses.map(({ json }) => json.id) })),

  create: (resource, params) =>
    httpClient(`${apiUrl}/${resource}`, {
      method: 'POST',
      body: JSON.stringify(params.data)
    }).then(({ json }) => ({
      data: { ...params.data, id: json.id }
    })),

  delete: (resource, params) =>
    httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: 'DELETE'
    }).then(({ json }) => ({ data: json })),

  // json-server doesn't handle filters on DELETE route, so we fallback to calling DELETE n times instead
  deleteMany: (resource, params) =>
    Promise.all(
      params.ids.map((id) =>
        httpClient(`${apiUrl}/${resource}/${id}`, {
          method: 'DELETE'
        })
      )
    ).then((responses) => ({ data: responses.map(({ json }) => json.id) }))
});

export default restProvider;
