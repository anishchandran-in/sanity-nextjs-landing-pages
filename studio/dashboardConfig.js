export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5ee1e804bf5617a369357746',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-8uj29a7h',
                  apiId: 'd81a6a36-8a1a-4755-8aa2-722b4e77381c'
                },
                {
                  buildHookId: '5ee1e80498f94eaeb8ba0c8e',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-wdbadq6z',
                  apiId: 'b327f3a2-ac45-441c-a8b1-bdbc116ccc65'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/anishchandran-in/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-wdbadq6z.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
