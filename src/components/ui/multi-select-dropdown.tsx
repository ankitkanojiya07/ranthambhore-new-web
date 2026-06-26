import { ChevronDown } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { cn } from "#/lib/utils";

interface MultiSelectDropdownProps {
	id?: string;
	name: string;
	options: readonly string[];
	placeholder?: string;
	required?: boolean;
	className?: string;
}

export function MultiSelectDropdown({
	id: idProp,
	name,
	options,
	placeholder = "Select options",
	required = false,
	className,
}: MultiSelectDropdownProps) {
	const autoId = useId();
	const id = idProp ?? autoId;
	const listboxId = `${id}-listbox`;
	const rootRef = useRef<HTMLDivElement>(null);
	const [open, setOpen] = useState(false);
	const [selected, setSelected] = useState<string[]>([]);

	useEffect(() => {
		if (!open) return;

		const handlePointerDown = (event: MouseEvent) => {
			if (!rootRef.current?.contains(event.target as Node)) {
				setOpen(false);
			}
		};

		const handleEscape = (event: KeyboardEvent) => {
			if (event.key === "Escape") setOpen(false);
		};

		document.addEventListener("mousedown", handlePointerDown);
		document.addEventListener("keydown", handleEscape);
		return () => {
			document.removeEventListener("mousedown", handlePointerDown);
			document.removeEventListener("keydown", handleEscape);
		};
	}, [open]);

	const toggleOption = (option: string) => {
		setSelected((current) =>
			current.includes(option)
				? current.filter((item) => item !== option)
				: [...current, option],
		);
	};

	const displayLabel = selected.length > 0 ? selected.join(", ") : placeholder;

	return (
		<div ref={rootRef} className={cn("relative", className)}>
			<button
				id={id}
				type="button"
				aria-haspopup="listbox"
				aria-expanded={open}
				aria-controls={listboxId}
				onClick={() => setOpen((current) => !current)}
				className={cn(
					"flex w-full items-center justify-between gap-3 rounded border border-muted-300 bg-sand-50 px-4 py-3 text-left font-body text-sm focus:border-sunset-500 focus:outline-none",
					selected.length === 0 ? "text-charcoal-400" : "text-charcoal-800",
				)}
			>
				<span className="line-clamp-2">{displayLabel}</span>
				<ChevronDown
					className={cn(
						"size-4 shrink-0 text-charcoal-500 transition-transform",
						open && "rotate-180",
					)}
				/>
			</button>

			{open && (
				<div
					id={listboxId}
					role="listbox"
					aria-multiselectable="true"
					aria-label={placeholder}
					className="absolute z-30 mt-1 max-h-56 w-full overflow-y-auto rounded border border-muted-300 bg-sand-50 py-1 shadow-lg ring-1 ring-muted-300/50"
				>
					{options.map((option) => {
						const isSelected = selected.includes(option);
						return (
							<label
								key={option}
								className="flex cursor-pointer items-center gap-3 px-4 py-2.5 font-body text-sm text-charcoal-800 transition-colors hover:bg-sand-100"
							>
								<input
									type="checkbox"
									className="size-4 shrink-0 accent-sunset-500"
									checked={isSelected}
									onChange={() => toggleOption(option)}
								/>
								<span>{option}</span>
							</label>
						);
					})}
				</div>
			)}

			{selected.map((value) => (
				<input key={value} type="hidden" name={name} value={value} />
			))}

			{required && (
				<input
					tabIndex={-1}
					aria-hidden
					required
					value={selected.join(",")}
					onChange={() => {}}
					className="pointer-events-none absolute h-0 w-0 opacity-0"
				/>
			)}
		</div>
	);
}
