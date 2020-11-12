#!/bin/bash

# specify which hooks have to be used
HOOK_NAMES="pre-commit post-checkout"

# assuming the script is in a bin directory, one level into the repo
GIT_HOOK_DIR=$(git rev-parse --show-toplevel)/.git/hooks
LOCAL_HOOK_DIR=$(git rev-parse --show-toplevel)/config/git-hooks

for hook in $HOOK_NAMES; do
    # create the symlink, overwriting the file if it exists
    # probably the only way this would happen is if you're using an old version of git
    # -- back when the sample hooks were not executable, instead of being named ____.sample
    ln -sf $LOCAL_HOOK_DIR/$hook $GIT_HOOK_DIR/$hook
    
    # set permissions of local hook to be executable
    chmod +x $LOCAL_HOOK_DIR/$hook
done