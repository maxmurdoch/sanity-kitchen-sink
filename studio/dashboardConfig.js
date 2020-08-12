export default {
  widgets: [
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
                  buildHookId: '5f33e8c6b9ab5a5df4341ded',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-uccgfx3d',
                  apiId: '8935b33e-e92c-43d3-a2e4-a17541965d40'
                },
                {
                  buildHookId: '5f33e8c72a723534141bb20c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-dtr41hte',
                  apiId: 'a0173ffa-2955-4821-b4aa-bc24070d25b8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/maxmurdoch/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-dtr41hte.netlify.app', category: 'apps'}
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
