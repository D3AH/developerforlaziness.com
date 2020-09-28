export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5f712c8dbce56189dc03eb0c',
                  title: 'Sanity Studio',
                  name: 'developerforlaziness-com-studio',
                  apiId: '094fe23e-5e61-4b76-b78e-77381079f943'
                },
                {
                  buildHookId: '5f712c8d3bbe86f33ab7099c',
                  title: 'Blog Website',
                  name: 'developerforlaziness-com',
                  apiId: '30a69e18-4575-4146-9864-fd6cdc06180d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/D3AH/developerforlaziness.com',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://developerforlaziness-com.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
