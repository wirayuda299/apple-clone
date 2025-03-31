export default {
  name: "hero",
  title: "Hero",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "SubTitle",
      name: "subTitle",
      type: "string",
    },
    {
      name: "page",
      title: "Page",
      type: "string",
    },
    {
      name: "heroImage",
      title: "HeroImage",
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
