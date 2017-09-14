# Changing the tag of a release

Evil, I know but:

1. `git tag -d v1.0.0-beta.4`
2. `git tag -a v1.0.0-beta.4 -m "Examples for Substance 1.0 Beta 4 release."`
3. `git push -f --tags`

# Rebase onto

When you want to rebase onto a force-pushed branch.

`git rebase --onto new_base old_base mybranch`

This selects the commits between old_base and mybranch and replays them on top of new_base.
