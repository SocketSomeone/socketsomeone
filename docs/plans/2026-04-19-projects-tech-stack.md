# Projects Tech Stack Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Добавить на страницу `Projects` отдельную анимированную бенто-секцию `Tools I work with`, показывающую основной стек технологий через иконки и категории, не загрязняя код страницы.

**Architecture:** Реализация строится вокруг нового компонентного блока `ProjectsTechStackSection`, который инкапсулирует данные, layout и motion-анимации. Страница `Projects` только импортирует и рендерит секцию между списком проектов и `Wakatime`, а внутренние карточки и данные разделяются на небольшие компоненты и локальные модули.

**Tech Stack:** Next.js App Router, React, TypeScript, Tailwind CSS, Framer Motion / Motion, simple-icons через `react-icon-cloud`

---

### Task 1: Проверить доступные зависимости и текущие UI-паттерны

**Files:**
- Inspect: `package.json`
- Inspect: `components/organisms/Projects/Projects.tsx`
- Inspect: `app/[locale]/projects/page.tsx`

**Step 1: Проверить наличие motion-библиотеки**

Run: `rg -n "\"framer-motion\"|\"motion\"" package.json components app`
Expected: видно, какая библиотека уже используется в проекте и как ее импортировать.

**Step 2: Найти существующие паттерны карточек и анимаций**

Run: `rg -n "whileHover|AnimatePresence|motion\\.|from \\\"motion|from 'motion|from \\\"framer-motion|from 'framer-motion" components app`
Expected: понятны локальные паттерны импорта и стили анимаций.

**Step 3: Зафиксировать итоговый API нового блока**

Decision:
- секция без пропсов или с минимальными пропсами;
- данные стека хранятся рядом с компонентом;
- страница только делает `<ProjectsTechStackSection />`.

### Task 2: Подготовить данные стека в отдельном модуле

**Files:**
- Create: `components/organisms/Projects/tech-stack.data.ts`

**Step 1: Создать типы данных**

Добавить типы:
- `TechStackItem`
- `TechStackGroup`

У каждого элемента должны быть:
- `name`
- `slug` для simple-icons
- опциональный `accent` или `featured`

**Step 2: Описать группы**

Создать массивы:
- `coreStack`
- `infrastructureStack`
- `dataStack`
- `alsoWorkedWith`

**Step 3: Экспортировать итоговую структуру**

Экспортировать единый объект или массив групп для использования секцией и карточками.

### Task 3: Создать базовый компонент иконки технологии

**Files:**
- Create: `components/organisms/Projects/TechStackIcon.tsx`

**Step 1: Реиспользовать текущий подход с simple-icons**

Сделать клиентский компонент, который:
- получает `slug` и `name`;
- рендерит иконку в едином стиле;
- работает в светлой и темной теме.

**Step 2: Добавить визуальные размеры**

Поддержать минимум два режима:
- `featured`
- `compact`

**Step 3: Добавить подпись**

Иконка всегда рендерится вместе с названием технологии, чтобы логотипы не требовали угадывания.

### Task 4: Создать компонент карточки категории

**Files:**
- Create: `components/organisms/Projects/TechStackGroupCard.tsx`

**Step 1: Описать API карточки**

Пропсы:
- `title`
- `description`
- `items`
- `variant`

`variant` должен покрывать хотя бы:
- `hero`
- `default`
- `compact`

**Step 2: Реализовать layout внутри карточки**

- `hero` показывает крупные элементы;
- `default` показывает обычную сетку;
- `compact` показывает более мелкие чипы.

**Step 3: Добавить hover-эффекты**

Через motion или Tailwind:
- легкий translateY;
- усиление border/glow;
- без агрессивного масштабирования.

### Task 5: Создать главный компонент секции

**Files:**
- Create: `components/organisms/Projects/ProjectsTechStackSection.tsx`

**Step 1: Собрать заголовок секции**

Использовать `SectionHeader` с новым текстом:
- title: `Tools I work with`
- description: короткое описание регулярного стека

**Step 2: Собрать outer shell**

Нужен один крупный контейнер:
- rounded corners;
- border;
- gradient background;
- subtle overlay / glow.

**Step 3: Собрать внутреннюю бенто-сетку**

Разместить:
- `Core stack`
- `Infrastructure`
- `Data & Messaging`
- `Also worked with`

Использовать `TechStackGroupCard` для каждой зоны.

### Task 6: Добавить спокойные премиальные анимации

**Files:**
- Modify: `components/organisms/Projects/ProjectsTechStackSection.tsx`
- Modify: `components/organisms/Projects/TechStackGroupCard.tsx`

**Step 1: Добавить viewport reveal**

Секция должна:
- плавно проявляться;
- слегка подниматься при входе во viewport;
- не перезапускаться бесконечно.

**Step 2: Добавить stagger для карточек**

Карточки должны появляться с короткой задержкой между собой.

**Step 3: Добавить мягкую фоновую динамику**

Сделать очень медленное движение glow/gradient внутри внешнего контейнера.

### Task 7: Встроить секцию в страницу Projects

**Files:**
- Modify: `app/[locale]/projects/page.tsx`

**Step 1: Импортировать новый компонент**

Добавить импорт `ProjectsTechStackSection`.

**Step 2: Вставить секцию в нужное место**

Расположить между:
- блоком `<Projects />`
- блоком `WakatimeStats`

**Step 3: Проверить чистоту страницы**

Убедиться, что страница осталась декларативной и не содержит деталей layout новой секции.

### Task 8: Финальная адаптация и полировка

**Files:**
- Modify: `components/organisms/Projects/ProjectsTechStackSection.tsx`
- Modify: `components/organisms/Projects/TechStackGroupCard.tsx`
- Modify: `components/organisms/Projects/TechStackIcon.tsx`

**Step 1: Проверить mobile layout**

Run: `npm test`
Expected: если есть snapshot/linters, они проходят; при отсутствии покрытия перейти к ручной визуальной проверке кода и responsive-классов.

**Step 2: Проверить светлую и темную тему**

Убедиться, что:
- контраст достаточный;
- иконки читаемы в обеих темах;
- glow не выбивается.

**Step 3: Подчистить API компонентов**

Упростить лишние пропсы и убрать дублирование, если оно появилось по ходу реализации.

### Task 9: Верификация

**Files:**
- Verify: `app/[locale]/projects/page.tsx`
- Verify: `components/organisms/Projects/ProjectsTechStackSection.tsx`
- Verify: `components/organisms/Projects/TechStackGroupCard.tsx`
- Verify: `components/organisms/Projects/TechStackIcon.tsx`
- Verify: `components/organisms/Projects/tech-stack.data.ts`

**Step 1: Запустить линт или доступную проверку**

Run: `npm test`
Expected: успешное завершение, либо явное понимание, что в проекте этот сценарий не покрывает изменения.

**Step 2: При наличии отдельного lint-скрипта проверить его**

Run: `npm run`
Expected: понятен список доступных команд; затем выбрать релевантную команду проверки.

**Step 3: Финально проверить git diff**

Run: `git diff -- app/[locale]/projects/page.tsx components/organisms/Projects`
Expected: изменения локализованы и соответствуют компонентной архитектуре.
