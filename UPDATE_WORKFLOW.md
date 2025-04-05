
# 프로젝트 업데이트 작업 플로우 (혼자만 작업 시)

이 프로젝트는 **수동 버전 관리** 방식을 사용하며,  
업데이트 시 **수정 작업**과 **버전 변경**을 **다른 커밋**으로 분리하여 진행합니다.

## 1. 프로젝트 수정 후 수정 내용을 커밋

```bash
# 예: shared.js에서 tabWidth를 4로 변경
vim base/shared.js

# 수정 커밋
git add .
git commit -m "fix: 기본 탭 너비를 4로 변경"
git push
```

## 2. `package.json`에서 버전 수동 변경 (버전은 반드시 새로 설정)

```json
"version": "1.1.0"
```

## 3. 버전 업데이트 커밋

```bash
git add package.json
git commit -m "release: 1.1.0"
git push
```

## 4. 사용 프로젝트에서 업데이트

```bash
yarn upgrade @untest57/prettier-config
```

> **사용 프로젝트에서 업데이트할 때**는 `.env` 파일을 참조하고,  
> **`.npmrc`**, **`.yarnrc.yml`**, **`bunfig.toml`** 설정을 사용하여 GitHub Packages에서 패키지를 설치합니다.

---

## ✅ 자동 배포 트리거 조건

GitHub Actions는 아래 조건이 충족되었을 때만 자동으로 publish합니다:

- `main` 브랜치로 푸시됨 ✅
- `package.json`의 `"version"` 값이 변경됨 ✅

---

## ✅ 커밋 스타일 추천

| 목적 | 커밋 메시지 |
|------|-------------|
| 기능 추가 | `feat: import 정렬 기준 추가` |
| 버그 수정 | `fix: JSX quote 옵션 오류 수정` |
| 문서 변경 | `docs: README 설정 가이드 정리` |
| 버전 릴리즈 | `release: 1.1.0` ✅ |
