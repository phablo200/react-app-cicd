module.exports = {
    branchs: "master",
    repositoryurl: "https://github.com/phablo200/react-app-cicd",
    plugins: [
        '@semantic-release/commit-analyzer', 
        '@semantic-release/release-notes-generator', 
        '@semantic-release/github'
    ]
};