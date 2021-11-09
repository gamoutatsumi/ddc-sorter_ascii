# ddc-sorter_ascii

ASCII code order sorter for ddc.vim

## Required

- [denops.vim](https://github.com/vim-denops/denops.vim)
- [ddc.vim](https://github.com/Shougo/ddc.vim)

## Configuration

```vim
call ddc#custom#patch_global('sourceOptions', {
  \ '_': {
  \   'sorters': ['sorter_ascii'],
  \ }
  \ })
```
