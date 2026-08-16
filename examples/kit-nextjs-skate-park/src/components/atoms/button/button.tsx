"use client";

import * as React from "react";
import Link from "next/link";

import { Button } from "../../../lib/ui/button";
import { cn } from "../../../lib/atoms-utils";

export type ButtonAtomProps = Omit<
  React.ComponentProps<"button">,
  "color" | "children"
> & {
  /** Visible label text (Design Studio “Display name”). */
  displayName?: string;
  /** Placeholder text used when no label/children exists. */
  placeHolderText?: string;

  /** Optional navigation URL. When set, renders as a link-style button. */
  href?: string;
  /** Link target when `href` is set. */
  target?: React.HTMLAttributeAnchorTarget;
  /** Rel attribute when `href` is set (auto-adds noopener/noreferrer for _blank). */
  rel?: string;
  /** Accessible name override if the visible label is not descriptive. */
  ariaLabel?: string;

  /** Optional children text/icon; when empty, `displayName`/placeholder is used. */
  children?: React.ReactNode;
};

function isEmptyChildren(node: React.ReactNode): boolean {
  if (node == null || node === false || node === true) return true;
  if (typeof node === "string") return node.trim().length === 0;
  if (typeof node === "number") return false;
  if (Array.isArray(node))
    return node.length === 0 || node.every(isEmptyChildren);
  return false;
}

function isExternalHref(href: string): boolean {
  return /^https?:\/\//i.test(href);
}

function ButtonAtomComponent({
  className,
  displayName,
  placeHolderText,
  href,
  target,
  rel,
  ariaLabel,
  children,
  disabled,
  onClick,
  ...rest
}: ButtonAtomProps) {
  let resolvedChildren: React.ReactNode = children;
  if (isEmptyChildren(children)) {
    if (displayName != null && displayName.trim() !== "") {
      resolvedChildren = displayName;
    } else if (placeHolderText != null && placeHolderText.trim() !== "") {
      resolvedChildren = (
        <span className="text-muted-foreground" data-button-placeholder>
          {placeHolderText}
        </span>
      );
    }
  }

  const resolvedAriaLabel =
    ariaLabel ??
    (typeof resolvedChildren === "string" && resolvedChildren.trim()
      ? resolvedChildren
      : undefined);

  if (href && href.trim()) {
    const external = isExternalHref(href);
    const finalTarget = target ?? (external ? "_blank" : undefined);
    const shouldNoopener = finalTarget === "_blank";
    const finalRel =
      rel ?? (shouldNoopener ? "noopener noreferrer" : undefined);

    return (
      <Button
        asChild
        className={cn(className)}
        aria-label={resolvedAriaLabel}
      >
        {external ? (
          <a href={href} target={finalTarget} rel={finalRel}>
            {resolvedChildren}
          </a>
        ) : (
          <Link href={href} target={finalTarget} rel={finalRel}>
            {resolvedChildren}
          </Link>
        )}
      </Button>
    );
  }

  return (
    <Button
      data-slot="button-atom"
      className={cn(className)}
      aria-label={resolvedAriaLabel}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {resolvedChildren}
    </Button>
  );
}

export { ButtonAtomComponent as Button };
