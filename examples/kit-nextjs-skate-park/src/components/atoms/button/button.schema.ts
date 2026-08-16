import { withPropMeta } from "@sitecore-content-sdk/nextjs/atoms";
import { z } from "zod";

const targetSchema = z.enum(["_self", "_blank", "_parent", "_top"]).optional();

export const buttonCatalogDefinition = {
  props: z.object({
    displayName: withPropMeta(
      z
        .string()
        .optional()
        .describe("Display name / label text shown inside the button."),
      { control: "text" },
    ),
    placeHolderText: withPropMeta(
      z
        .string()
        .optional()
        .describe("Placeholder text shown when label is empty."),
      { control: "text" },
    ),
    href: withPropMeta(
      z
        .string()
        .optional()
        .describe(
          "When provided, button acts as a link (internal or external URL).",
        ),
      { control: "text" },
    ),
    target: targetSchema.describe("Link target when href is set."),
    rel: withPropMeta(
      z
        .string()
        .optional()
        .describe("Rel attribute when href is set (e.g. noopener noreferrer)."),
      { control: "text" },
    ),
    ariaLabel: withPropMeta(
      z
        .string()
        .optional()
        .describe(
          "Accessible name override (recommended for icon-only buttons).",
        ),
      { control: "text" },
    ),
  }),
  description:
    "Category: Media. Generic button atom for actions or navigation. Presentation is open via className; do not encode visual variants on the atom.",
  example: {
    displayName: "Get started",
  },
  slots: ["default"],
  allowedChildren: ["text"],
};
