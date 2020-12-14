export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5fd7880d80268e582a568833',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-pamgqor4',
                  apiId: 'bc0ce1e5-2121-484a-a658-724af5fcc485'
                },
                {
                  buildHookId: '5fd7880d7d98016cdd2e62b1',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-vb7a7tq6',
                  apiId: 'a40483a0-1169-41f1-8fa4-e9c99f2be4b7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ivar532/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-vb7a7tq6.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
