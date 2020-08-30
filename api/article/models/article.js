"use strict";

/**
 * Lifecycle callbacks for the `article` model.
 */

const slugify = require("slugify");

module.exports = {
  lifecycles: {
    async beforeCreate(data) {
      strapi.log.debug("beforeCreate");
      data.slug = slugify(data.title, { lower: true });
    },
    async beforeUpdate(params, data) {
      strapi.log.debug("beforeUpdate");
      data.slug = slugify(data.title, { lower: true });
    },
  },
};
