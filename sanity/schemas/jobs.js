export default {
  name: "jobs",
  title: "Jobs",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Job Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "company",
      title: "Company Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "salary",
      title: "Salary",
      type: "number",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "remote",
      title: "Remote",
      type: "boolean",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "requirements",
      title: "Requirements",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "phone",
      title: "Phone",
      type: "string",
    },
  ],
};
