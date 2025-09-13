# Commit Message Guidelines

This project follows conventional commit message format to maintain clear and consistent git history.

## Format

```
type(scope): subject

body (optional)

footer (optional)
```

## Types

- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **test**: Adding missing or correcting existing tests
- **chore**: Changes to the build process or auxiliary tools and libraries

## Scope

The scope could be anything specifying place of the commit change. For example:
- **auth**: Authentication related changes
- **ui**: User interface changes
- **api**: API related changes
- **dashboard**: Dashboard feature changes
- **sidenav**: Sidenav component changes

## Subject

- Use the imperative, present tense: "change" not "changed" nor "changes"
- Don't capitalize the first letter
- No dot (.) at the end
- Maximum 50 characters

## Examples

```
feat(auth): add user authentication
fix(ui): resolve button styling issue
docs(readme): update installation instructions
refactor(dashboard): extract zoom logic to service
style(components): fix linting issues
test(services): add unit tests for navigation service
chore(deps): update angular to v19
```

## Body

- Use the imperative, present tense
- Explain what and why vs. how
- Can include multiple paragraphs

## Footer

- Reference breaking changes and issues closed
- Format: `Closes #123` or `BREAKING CHANGE: description`
