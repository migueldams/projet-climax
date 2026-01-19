# Autocomplete component

A simple local Autocomplete component is available at `src/components/ui/Autocomplete.tsx`.

## Usage

```tsx
import Autocomplete, { AutocompleteItem } from 'src/components/ui/Autocomplete'

const items: AutocompleteItem[] = [
  { id: '1', label: 'Design' },
  { id: '2', label: 'Development' },
]

<Autocomplete items={items} onSelect={(item) => console.log('picked', item)} />
```

## Props

- `items: AutocompleteItem[]` — list of suggestions {id, label}
- `onSelect?: (item) => void` — callback when user selects an item
- `placeholder?: string` — input placeholder
- `maxSuggestions?: number` — max shown suggestions (default 8)
- `match?: 'contains'|'startsWith'` — filtering strategy (default `contains`)

## Notes

- Keyboard supported: ArrowUp / ArrowDown / Enter / Escape
- Basic ARIA roles included for accessibility
- The component is implemented with local data—if you need async suggestions, fetch and pass a list to `items` or adapt the component to call an API.
