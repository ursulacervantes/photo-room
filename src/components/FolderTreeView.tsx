import React, { useState } from "react";
import TreeView from '@mui/lab/TreeView'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import TreeItem from '@mui/lab/TreeItem'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

export default function FolderTreeView({ items }: { items: Object[] | [] }) {
    const [folders, setFolders] = useState<string[]>([])
    const [folderName, setFolderName] = useState<string>('')

    const handleAddFolder = () => {
        setFolders([...folders, folderName ])
        setFolderName('')
    }

    return (
        <>
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
            {folders.map((folder: string, index: number) =>
                <TreeItem nodeId={`${index + 1}`} label={folder} key={`folders-item-${index + 1}`} />
            )}
        </TreeView>
        
        <TextField 
            id="addFolder"
            aria-describedby="Add new folder" 
            onChange={(e) => setFolderName(e.target.value)} 
            value={folderName}
            error={folderName === ''}
            helperText={folderName === '' ? 'Name cannot be empty' : ' '}
        />
        <Button variant="contained" onClick={handleAddFolder}>Add</Button>

        </>
    )
}