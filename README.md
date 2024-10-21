# Veronica's Portfolio
# 실행 환경
- Node.js v21.2.0

# 실행 방법
- yarn
- yarn start

# 구조
```bash
├── src
│   ├── App.js
│   ├── App.scss
│   ├── actions
│   │   ├── common.action.js
│   │   └── index.js
│   ├── assets
│   │   ├── anim.scss
│   │   ├── base.scss
│   │   ├── color.scss
│   │   └── images
│   │       ├── highlight.png
│   │       └── me.jpeg
│   ├── components
│   │   ├── Editor
│   │   │   ├── Editor.js
│   │   │   └── Theme.json
│   │   ├── Folder
│   │   │   ├── Folder.js
│   │   │   └── Folder.scss
│   │   ├── PastProject
│   │   │   ├── PastProject.js
│   │   │   └── PastProject.scss
│   │   ├── PossibleScope
│   │   │   ├── PossibleScope.js
│   │   │   ├── PossibleScope.scss
│   │   │   ├── Scope.js
│   │   │   └── Scope.scss
│   │   ├── SkillMountain
│   │   │   ├── SkillMountain.scss
│   │   │   └── SkillMoutain.js
│   │   ├── WorkStyle
│   │   │   ├── WorkStyle.js
│   │   │   └── WorkStyle.scss
│   │   └── index.js
│   ├── const.js
│   ├── helpers
│   │   ├── index.js
│   │   ├── storage.js
│   │   ├── store.js
│   │   ├── useDebounce.js
│   │   ├── useInterval.js
│   │   ├── usePrevious.js
│   │   ├── useThrottle.js
│   │   ├── useWindowSize.js
│   │   └── utility.js
│   ├── index.js
│   ├── locale
│   │   ├── i18n.js
│   │   ├── resources.js
│   │   └── translation.js
│   ├── pages
│   │   ├── Home
│   │   │   ├── Home.scss
│   │   │   ├── HomeView.js
│   │   │   ├── const.js
│   │   │   ├── index.js
│   │   │   └── structure.js
│   │   └── index.js
│   ├── services
│   │   └── api.config.js
│   └── stomp
│       ├── StompProvider.js
│       ├── index.js
│       └── useStomp.js
├── webpack.config.js
├── yarn-error.log
└── yarn.lock
```