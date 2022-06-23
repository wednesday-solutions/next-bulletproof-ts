<div>
  <a href="https://www.wednesday.is?utm_source=gthb&utm_medium=repo&utm_campaign=serverless" align="left" style="margin-left: 0;">
    <img src="https://uploads-ssl.webflow.com/5ee36ce1473112550f1e1739/5f5879492fafecdb3e5b0e75_wednesday_logo.svg">
  </a>
  <p>
    <h1 align="left">Next.js TypeScript Template
    </h1>
  </p>

  <p>
An enterprise Next.js template application based on bulletproof architecture showcasing - Testing strategies, Global state management, Custom environments, a network layer, component library integration, server response caching, PWA support, localization, Custom App, Custom document, Custom offline fallback, and Continuous integration & deployment.
  </p>

---

  <p>
    <h4>
      Expert teams of digital product strategists, developers, and designers.
    </h4>
  </p>

  <div>
    <a href="https://www.wednesday.is/contact-us?utm_source=gthb&utm_medium=repo&utm_campaign=serverless" target="_blank">
      <img src="https://uploads-ssl.webflow.com/5ee36ce1473112550f1e1739/5f6ae88b9005f9ed382fb2a5_button_get_in_touch.svg" width="121" height="34">
    </a>
    <a href="https://github.com/wednesday-solutions/" target="_blank">
      <img src="https://uploads-ssl.webflow.com/5ee36ce1473112550f1e1739/5f6ae88bb1958c3253756c39_button_follow_on_github.svg" width="168" height="34">
    </a>
  </div>

---

<span>We’re always looking for people who value their work, so come and join us. <a href="https://www.wednesday.is/hiring">We are hiring!</a></span>

</div>

### Out of the box support

- Global state management using `redux-toolkit`
- Side Effects using `RTK Query`
- API calls using `api-sauce`
- Styling using `styled-components`
- Reusing components from Ant design
- Translations using `react-intl`

## Global state management using @redux/toolkit

- Global state management using [Redux Toolkit](https://redux-toolkit.js.org/)

  Take a look at the following files

  - [store/slices/repos.ts](store/slices/repos.ts)

- Getting state from the redux store and dispatching actions to store using [React Redux](https://react-redux.js.org/)

  Take a look at the following files

  - [store/index.ts](store/index.ts)

## Implementing a Redux middleware using RTK Query

- Side effects using [RTK Query](https://redux-toolkit.js.org/tutorials/rtk-query)

  Take a look at the following files

  - [utils/apiUtils.ts](utils/apiUtils.ts)
  - [features/repos/api/getRecommendations.ts](features/repos/api/getRecommendations.ts)
  - [features/info/api/getRepoInfo.ts](features/info/api/getRepoInfo.ts)
  - [features/repos/components/RepoList/index.tsx](features/repos/components/RepoList/index.tsx)

## Network requests using apisauce

- API calls using [Api Sauce](https://github.com/infinitered/apisauce/)

  Take a look at the following files

  - [utils/apiUtils.ts](utils/apiUtils.ts)
  - [features/repos/api/getRecommendations.ts](features/repos/api/getRecommendations.ts)
  - [features/info/api/getRepoInfo.ts](features/info/api/getRepoInfo.ts)

## Styling using styled-components

- Styling components using [Styled Components](https://styled-components.com)

  Take a look at the following files

  - [common/styled/index.tsx](common/styled/index.tsx)
  - [common/Clickable/index.tsx](common/Clickable/index.tsx)
  - [common/T/index.tsx](common/T/index.tsx)

## Using antd as the component library

- Reusing components from [Ant design](https://ant.design)

  Take a look at the following files

  - [common/Loader/index.tsx](common/Loader/index.tsx)
  - [containers/Repos/index.tsx](containers/Repos/index.tsx)
  - [features/repos/components/RepoList/index.tsx](features/repos/components/RepoList/index.tsx)

## Localization using react-intl

- Translations using [React Intl](https://github.com/formatjs/react-intl)

  Take a look at the following files

  - [translations/en.json](translations/en.json)
  - [common/IntlGlobalProvider/index.tsx](common/IntlGlobalProvider/index.tsx)
  - [common/T/index.tsx](common/T/index.tsx)
  - [features/info/components/RepoInfo/index.tsx](features/info/components/RepoInfo/index.tsx)

## Implementing CI/CD pipelines using Github Actions

- CI/CD using Github Actions.
  The CI pipeline has the following phases

  - Checkout
  - Install dependencies
  - Lint
  - Test
  - Build
  - Lighthouse CI

  Take a look at the following files

  - [.github/workflows/ci.yml](.github/workflows/ci.yml)

      <!-- The CD pipeline has the following phases
    
      - Checkout
      - Install dependencies
      - Build
      - Deploy
    
    
       - [.github/workflows/cd.yml](.github/workflows/cd.yml) -->

## Testing using @testing-library/react

- Testing is done using the @testing-library/react.

  Take a look at the following files

  - [jest.config.js](jest.config.js)
  - [jest.setup.js](jest.setup.js)
  - [common/Clickable/tests/index.test.tsx](common/Clickable/tests/index.test.tsx)
  - [common/For/tests/index.test.tsx](common/For/tests/index.test.tsx)
  - [features/repos/components/RepoList/tests/index.test.tsx](features/repos/components/RepoList/tests/index.test.tsx)

## Development

### Start server

- **Development:** `yarn dev`

- **Production:** `yarn start`

### Build project (SSG)

<!-- - **Development:** `yarn build:dev` -->

- **Production:** `yarn build`

## Misc

### Aliasing

- @features -> features/
- @slices -> store/slices/
- @store -> store/
- @common -> common/
- @themes -> themes/
- @utils -> utils/
- @containers -> containers/

Take a look at the following files

- [next.config.js](next.config.js)

### Index page

- [pages/index.tsx](pages/index.tsx)

### Custom document

- [pages/\_document.tsx](pages/_document.tsx)

### Custom app

- [pages/\_app.tsx](pages/_app.tsx)

### Custom offline fallback page

- [pages/\_offline.tsx](pages/_offline.tsx)
