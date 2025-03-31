export default {
  name: "carousels",
  title: "Carousels",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "genre",
      title: "Genre",
      type: "string",
    },
    {
      name: "subTitle",
      title: "SubTitle",
      type: "string",
    },
    {
      name: "carouselImage",
      title: "CarouselImage",
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
