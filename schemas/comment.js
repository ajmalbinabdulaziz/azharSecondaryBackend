import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
    }),
    defineField({
      name: 'user',
      title: 'User',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'email',
    }),
    defineField({
      name: 'userImage',
      title: 'User image',
      type: 'string',
      // options: {
      //   hotspot: true,
      // },
    }),
    defineField({
      name: 'post',
      title: 'Post',
      type: 'reference',
      to: {type: 'post'},
    }),
    defineField({
      name: 'parentId',
      title: 'Parent ID',
      type: 'reference',
      weak: true,
      to: {type: 'comment'},
      initialValue: undefined,
    }),
    defineField({
      name: 'publishedAt', 
      title: 'Published at',
      type: 'datetime',
    }),
  ],

  preview: {
    select: {
      title: 'message',
      subtitle: 'user',
    },
  },

})
