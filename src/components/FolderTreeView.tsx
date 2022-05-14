import * as React from 'react';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';

export default function FolderTreeView({ items }: { items: Object[] | [] }) {
    return (
        <TreeView
            aria-label="file system navigator"
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
        >
            <TreeItem nodeId="1" label="Untitled Folder">
                {items.map((_: Object, index: number) => 
                    <TreeItem nodeId={`${(index + 1) * 10}`} label={`image-${index + 1}`} key={`tree-item-${index+1}`} />
                )}
            </TreeItem>
        </TreeView>
    );
}