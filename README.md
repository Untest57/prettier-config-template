# @Untest57/prettier-config

공통 Prettier 설정을 모듈화하여 구성한 템플릿입니다.  
사용자는 필요한 설정을 직접 조합하거나, 통합된 설정을 바로 사용할 수 있습니다.

---

## 📦 패키지 매니저별 설정 안내 (GitHub Packages 전용)

이 패키지는 GitHub Packages 전용입니다.  
설치 전에 반드시 인증 토큰 설정이 필요합니다.

---

### 📁 .env 파일 (.env.example 참고)

```env
GITHUB_TOKEN=ghp_당신의_토큰
```

---

### 📥 설치 명령어

```bash
# yarn 사용 예시
yarn add -D prettier @untest57/prettier-config prettier-plugin-tailwindcss @trivago/prettier-plugin-sort-imports
```

---

## ✅ 패키지 매니저별 설정

### 🛠 npm / pnpm 설정 (`.npmrc`)

```ini
@untest57:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
```

---

### 🛠 Yarn 설정 (`.yarnrc.yml`) - Yarn Berry v2 이상

```yaml
npmScopes:
  untest57:
    npmRegistryServer: "https://npm.pkg.github.com"
    npmAuthToken: "${GITHUB_TOKEN}"
```

---

### 🛠 Bun 설정 (`bunfig.toml`)

```toml
# bunfig.toml

[install.scopes]
"untest57" = { url = "https://npm.pkg.github.com", authToken = "${GITHUB_TOKEN}" }
```

---

## ✅ Prettier 설정 확장 및 `overrides` 사용 예제

이 프로젝트는 **Prettier**의 기본 설정을 모듈화하여 제공합니다.  
사용자는 설치 후 **`prettier.config.js`** 파일을 생성하고, 패키지 내 제공된 설정을 **자신의 프로젝트에 맞게 확장**할 수 있습니다.

### 기본 설정 내 설정을 고친 예시

```js
const baseConfig = require('@untest57/prettier-config');

module.exports = {
  ...baseConfig, // 기본 설정을 포함

  // 기본 설정을 수정하거나 추가적인 옵션을 적용할 수 있습니다.
  semi: false, // 세미콜론을 사용하지 않도록 변경
  singleQuote: false, // 작은따옴표 대신 큰따옴표 사용

  overrides: [
    {
      // `base/` 폴더 내의 JavaScript 파일들에 대한 설정
      files: 'base/*.js',
      options: {
        ...base,
        trailingComma: 'none', // `base/` 폴더의 JavaScript 파일에는 끝에 콤마를 추가하지 않음
        singleQuote: true,     // `base/` 폴더의 JavaScript 파일에서는 작은따옴표 사용
      },
    }
  ],
};
```

## ✅ 프로젝트 업데이트 작업 플로우 (혼자만 작업 시)

자세한 작업 플로우는 [UPDATE_WORKFLOW.md](./UPDATE_WORKFLOW.md) 파일을 참고하세요.
