import { useMemo, useState } from "react";
import Node from "./Node";

export default function Branch({ item, level }) {
    const [selected, setSelected] = useState(item.selected ?? false);
    const hasChildren = useMemo(() => (item.children && item.children.length !== 0), [item]);

    return (
        <>
            <Node item={item} selected={selected} hasChildren={hasChildren} level={level} onToggle={() => setSelected(prev => !prev)} />
            {
                selected && hasChildren &&
                item.children.map((child) => (<Branch key={child.key} item={child} level={level + 1} />))
            }
        </>
    );
}