import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'Downloads',
  title: 'downloads',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      description: 'Keep the titles short!',
      type: 'string',
    }),
    defineField({
        name: 'description',
        title: 'Description',
        type: 'string',
      }),
    defineField({
      name: 'file',
      title: 'File',
      type: 'file',
    }),
    defineField({
        name: 'categories',
        title: 'Categories',
        type: 'array',
        of: [{type: 'reference', to: {type: 'category'}}],
      }),
    ],
    preview: {
        select: {
        title: 'title',
        category: 'category.title',
        },
    },
    prepare(selection) {
        const {category} = selection
        return Object.assign({}, selection, {
        subtitle: category && `in ${category}`,
        })
    },

})
