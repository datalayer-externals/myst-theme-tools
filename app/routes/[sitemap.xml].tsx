import { createSitemapIndexResponse } from '@myst-theme/site';
import { getDomainFromRequest } from '@myst-theme/site';
import type { LoaderFunction } from '@remix-run/node';

// TODO: get these from the config!
const projects = [
  'overview',
  'guide',
  'jtex',
  'spec',
  // 'cli',
  // 'myst-to-tex',
  'myst-transforms',
  // 'jupyterlab',
  // 'thebe',
];

export const loader: LoaderFunction = async ({ request }): Promise<Response> => {
  return createSitemapIndexResponse(getDomainFromRequest(request), [
    '/sandbox',
    ...projects.map((p) => `/${p}/sitemap.xml`),
  ]);
};
