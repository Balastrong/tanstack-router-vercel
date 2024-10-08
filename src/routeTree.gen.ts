/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as DashboardImport } from './routes/dashboard'
import { Route as CrewImport } from './routes/crew'
import { Route as IndexImport } from './routes/index'
import { Route as CrewIndexImport } from './routes/crew/index'
import { Route as CrewIdImport } from './routes/crew/$id'
import { Route as CrewIdDetailImport } from './routes/crew/$id.detail'

// Create/Update Routes

const DashboardRoute = DashboardImport.update({
  path: '/dashboard',
  getParentRoute: () => rootRoute,
} as any)

const CrewRoute = CrewImport.update({
  path: '/crew',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const CrewIndexRoute = CrewIndexImport.update({
  path: '/',
  getParentRoute: () => CrewRoute,
} as any)

const CrewIdRoute = CrewIdImport.update({
  path: '/$id',
  getParentRoute: () => CrewRoute,
} as any)

const CrewIdDetailRoute = CrewIdDetailImport.update({
  path: '/detail',
  getParentRoute: () => CrewIdRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/crew': {
      id: '/crew'
      path: '/crew'
      fullPath: '/crew'
      preLoaderRoute: typeof CrewImport
      parentRoute: typeof rootRoute
    }
    '/dashboard': {
      id: '/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof DashboardImport
      parentRoute: typeof rootRoute
    }
    '/crew/$id': {
      id: '/crew/$id'
      path: '/$id'
      fullPath: '/crew/$id'
      preLoaderRoute: typeof CrewIdImport
      parentRoute: typeof CrewImport
    }
    '/crew/': {
      id: '/crew/'
      path: '/'
      fullPath: '/crew/'
      preLoaderRoute: typeof CrewIndexImport
      parentRoute: typeof CrewImport
    }
    '/crew/$id/detail': {
      id: '/crew/$id/detail'
      path: '/detail'
      fullPath: '/crew/$id/detail'
      preLoaderRoute: typeof CrewIdDetailImport
      parentRoute: typeof CrewIdImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  CrewRoute: CrewRoute.addChildren({
    CrewIdRoute: CrewIdRoute.addChildren({ CrewIdDetailRoute }),
    CrewIndexRoute,
  }),
  DashboardRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/crew",
        "/dashboard"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/crew": {
      "filePath": "crew.tsx",
      "children": [
        "/crew/$id",
        "/crew/"
      ]
    },
    "/dashboard": {
      "filePath": "dashboard.tsx"
    },
    "/crew/$id": {
      "filePath": "crew/$id.tsx",
      "parent": "/crew",
      "children": [
        "/crew/$id/detail"
      ]
    },
    "/crew/": {
      "filePath": "crew/index.tsx",
      "parent": "/crew"
    },
    "/crew/$id/detail": {
      "filePath": "crew/$id.detail.tsx",
      "parent": "/crew/$id"
    }
  }
}
ROUTE_MANIFEST_END */
