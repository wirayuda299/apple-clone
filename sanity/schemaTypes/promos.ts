export default {
  name: "promos",
  title: "Promos",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "subTitle",
      title: "SUbTitle",
      type: "string",
    },
    {
      name: "logo",
      title: "Logo",
      type: "image",
    },
    {
      name: "pathLeft",
      title: "pathLeft",
      type: "string",
    },
    {
      name: "styles",
      title: "Styles",
      type: "string",
    },
    {
      name: "pathRight",
      title: "pathRight",
      type: "string",
    },
    {
      name: "promosImage",
      title: "PromosImage",
      type: "document",
      fields: [
        {
          name: "imageLarge",
          title: "ImageLarge",
          type: "document",
          fields: [
            {
              name: "source",
              title: "Source",
              type: "image",
            },
            {
              name: "width",
              title: "Width",
              type: "number",
            },
            {
              name: "height",
              title: "Height",
              type: "number",
            },
          ],
        },
        {
          name: "imageMedium",
          title: "ImageMedium",
          type: "document",
          fields: [
            {
              name: "source",
              title: "Source",
              type: "image",
            },
            {
              name: "width",
              title: "Width",
              type: "number",
            },
            {
              name: "height",
              title: "Height",
              type: "number",
            },
          ],
        },
        {
          name: "imageSmall",
          title: "ImageSmall",
          type: "document",
          fields: [
            {
              name: "source",
              title: "Source",
              type: "image",
            },
            {
              name: "width",
              title: "Width",
              type: "number",
            },
            {
              name: "height",
              title: "Height",
              type: "number",
            },
          ],
        },
      ],
    },
  ],
};
