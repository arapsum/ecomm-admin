"use client";

import { useState } from "react";
import {
  Badge,
  Button,
  Input,
  Label,
  ScrollArea,
  Separator,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui";
import type { AnyOption, AnyProduct } from "@/types/product.types";
import { attributeColumnsByCategory } from "./attribute-config";

const GBP = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
});

interface OptionRowEditorProps {
  option: AnyOption;
  attrKeys: { key: string; label: string }[];
  onChange: (updated: AnyOption) => void;
}

function OptionRowEditor({ option, attrKeys, onChange }: OptionRowEditorProps) {
  function update(field: string, value: string | number) {
    onChange({ ...option, [field]: value });
  }

  function updateAttr(key: string, value: string) {
    onChange({
      ...option,
      attributes: { ...option.attributes, [key]: value },
    });
  }

  return (
    <div className="p-4 space-y-3 rounded-lg border">
      <div className="flex justify-between items-center">
        <span className="font-mono text-xs text-muted-foreground">
          {option.sku}
        </span>
        <Badge variant={option.quantity === 0 ? "destructive" : "secondary"}>
          {option.quantity === 0
            ? "Out of stock"
            : `${option.quantity} in stock`}
        </Badge>
      </div>

      {/* Attributes */}
      {attrKeys.length > 0 && (
        <div className="grid grid-cols-2 gap-3">
          {attrKeys.map(({ key, label }) => (
            <div key={key} className="space-y-1">
              <Label className="text-xs">{label}</Label>
              <Input
                value={(option.attributes as Record<string, string>)[key] ?? ""}
                onChange={(e) => updateAttr(key, e.target.value)}
                className="h-8 text-sm"
              />
            </div>
          ))}
        </div>
      )}

      {/* Pricing + Stock */}
      <div className="grid grid-cols-3 gap-3">
        <div className="space-y-1">
          <Label className="text-xs">Price (£)</Label>
          <Input
            type="number"
            value={option.price}
            onChange={(e) => update("price", parseFloat(e.target.value))}
            className="h-8 text-sm"
          />
        </div>
        <div className="space-y-1">
          <Label className="text-xs">Sale Price (£)</Label>
          <Input
            type="number"
            value={option.salePrice}
            onChange={(e) => update("salePrice", parseFloat(e.target.value))}
            className="h-8 text-sm"
          />
        </div>
        <div className="space-y-1">
          <Label className="text-xs">Quantity</Label>
          <Input
            type="number"
            value={option.quantity}
            onChange={(e) => update("quantity", parseInt(e.target.value, 10))}
            className="h-8 text-sm"
          />
        </div>
      </div>
    </div>
  );
}

interface ProductEditDrawerProps {
  product: AnyProduct | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSave?: (product: AnyProduct) => void;
}

export function ProductEditDrawer({
  product,
  open,
  onOpenChange,
  onSave,
}: ProductEditDrawerProps) {
  const [draft, setDraft] = useState<AnyProduct | null>(null);

  // Sync draft when product changes
  if (product && draft?.id !== product.id) {
    setDraft(structuredClone(product));
  }

  if (!draft) return null;

  const attrKeys = attributeColumnsByCategory[draft.category];

  function updateOption(index: number, updated: AnyOption) {
    setDraft((prev) => {
      if (!prev) return prev;
      const options = [...prev.options] as AnyOption[];
      options[index] = updated;
      return { ...prev, options } as AnyProduct;
    });
  }

  function handleSave() {
    if (draft) onSave?.(draft);
    onOpenChange(false);
  }

  const totalStock = draft.options.reduce((s, o) => s + o.quantity, 0);
  const prices = draft.options.map((o) => o.price);
  const priceRange =
    Math.min(...prices) === Math.max(...prices)
      ? GBP.format(prices[0])
      : `${GBP.format(Math.min(...prices))} – ${GBP.format(Math.max(...prices))}`;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="flex flex-col gap-0 p-0 w-full sm:max-w-2xl">
        {/* Header */}
        <SheetHeader className="py-5 px-6 border-b">
          <div className="flex gap-3 items-center">
            {draft.images[0] && (
              <img
                src={draft.images[0].url}
                alt={draft.name}
                className="object-contain rounded-md border size-12 bg-muted"
              />
            )}
            <div>
              <SheetTitle className="leading-tight">
                {draft.brand} {draft.name}
              </SheetTitle>
              <SheetDescription className="mt-0.5">
                <span className="capitalize">{draft.category}</span>
                {" · "}
                <span>{draft.modelNumber}</span>
                {" · "}
                <span>{priceRange}</span>
                {" · "}
                <span>{totalStock} in stock</span>
              </SheetDescription>
            </div>
          </div>
        </SheetHeader>

        {/* Product-level fields */}
        <div className="grid grid-cols-2 gap-4 py-4 px-6 border-b">
          <div className="space-y-1">
            <Label className="text-xs">Brand</Label>
            <Input
              value={draft.brand}
              onChange={(e) =>
                setDraft((p) => p && { ...p, brand: e.target.value })
              }
              className="h-8 text-sm"
            />
          </div>
          <div className="space-y-1">
            <Label className="text-xs">Model</Label>
            <Input
              value={draft.model}
              onChange={(e) =>
                setDraft((p) => p && { ...p, model: e.target.value })
              }
              className="h-8 text-sm"
            />
          </div>
          <div className="space-y-1">
            <Label className="text-xs">Model Number</Label>
            <Input
              value={draft.modelNumber}
              onChange={(e) =>
                setDraft((p) => p && { ...p, modelNumber: e.target.value })
              }
              className="h-8 text-sm"
            />
          </div>
          <div className="space-y-1">
            <Label className="text-xs">Year</Label>
            <Input
              type="number"
              value={draft.year}
              onChange={(e) =>
                setDraft(
                  (p) => p && { ...p, year: parseInt(e.target.value, 10) },
                )
              }
              className="h-8 text-sm"
            />
          </div>
        </div>

        {/* Options editor */}
        <ScrollArea className="flex-1">
          <div className="py-4 px-6 space-y-3">
            <p className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
              Variants ({draft.options.length})
            </p>
            {(draft.options as AnyOption[]).map((option, i) => (
              <OptionRowEditor
                key={option.id}
                option={option}
                attrKeys={attrKeys}
                onChange={(updated) => updateOption(i, updated)}
              />
            ))}
          </div>
        </ScrollArea>

        {/* Footer */}
        <SheetFooter className="flex gap-2 py-4 px-6 border-t">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="flex-1"
          >
            Cancel
          </Button>
          <Button onClick={handleSave} className="flex-1">
            Save changes
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
