/**
 * Gbvideos.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    video_id : {
      type : 'string',
      allowNull: true
    },
    trending_date : {
      type : 'string',
      allowNull: true
    },
    title:{
      type: 'string',
      allowNull: true
    },
    channel_title:{
      type: 'string',
      allowNull: true
    },
    category_id:{
      type: 'number',
      allowNull: true
    },
    publish_time:{
      type: 'string',
      allowNull: true
    },
    tags:{
      type: 'string',
      allowNull: true
    },
    views:{
      type: 'number',
      allowNull: true
    },
    likes:{
      type: 'number',
      allowNull: true
    },
    dislikes:{
      type: 'number',
      allowNull: true
    },
    comment_count:{
      type: 'number',
      allowNull: true
    },
    thumbnail_link:{
      type: 'string',
      allowNull: true
    },
    comments_disabled:{
      type: 'string',
      allowNull: true
    },
    ratings_disabled:{
      type: 'string',
      allowNull: true
    },
    video_error_or_removed:{
      type: 'string',
      allowNull: true
    },
    description:{
      type: 'string',
      allowNull: true
    }
  }
};
