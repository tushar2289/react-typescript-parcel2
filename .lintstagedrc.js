module.exports = {
  '**/*.+(js|ts|tsx|css|sass|less|graphql|yml|yaml|scss|vue)': [
    'eslint --fix --max-warnings=0 --no-ignore',
    'prettier --write',
  ],
  '**/*.+(md|json)': 'prettier --write',
  '**/(*test).ts?(x)': 'jest',
};
