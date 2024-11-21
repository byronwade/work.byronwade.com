"use client";

import * as React from "react";
import { Check } from "lucide-react";
import { jobCategories } from "@/config/categories";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

interface CategorySelectProps {
	value: string[];
	onChange: (value: string[]) => void;
}

export function CategorySelect({ value, onChange }: CategorySelectProps) {
	const [open, setOpen] = React.useState(false);

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<div className="flex flex-wrap gap-2 min-h-[2.5rem] w-full border rounded-md p-2">
					{value.length > 0 ? (
						value.map((category) => (
							<Badge key={category} variant="secondary">
								{jobCategories.find((c) => c.id === category)?.name}
							</Badge>
						))
					) : (
						<span className="text-muted-foreground">Select categories...</span>
					)}
				</div>
			</PopoverTrigger>
			<PopoverContent className="w-[400px] p-0">
				<Command>
					<CommandInput placeholder="Search categories..." />
					<CommandEmpty>No categories found.</CommandEmpty>
					<CommandGroup>
						{jobCategories.map((category) => (
							<CommandItem
								key={category.id}
								onSelect={() => {
									onChange(value.includes(category.id) ? value.filter((v) => v !== category.id) : [...value, category.id]);
								}}
							>
								<Check className={cn("mr-2 h-4 w-4", value.includes(category.id) ? "opacity-100" : "opacity-0")} />
								{category.name}
							</CommandItem>
						))}
					</CommandGroup>
				</Command>
			</PopoverContent>
		</Popover>
	);
}
