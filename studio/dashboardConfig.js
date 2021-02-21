export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6031fb365504100a12178187',
                  title: 'Sanity Studio',
                  name: 'srbyrd-sanity-studio',
                  apiId: '2acb9537-dfa8-457b-9000-16321a97ce3b'
                },
                {
                  buildHookId: '6031fb36550410f882178af1',
                  title: 'Portfolio Website',
                  name: 'srbyrd-sanity',
                  apiId: '4685ac5e-d4b3-4106-9388-dea9ee72ad16'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dwmyke/srbyrd-sanity',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://srbyrd-sanity.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
