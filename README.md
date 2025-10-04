[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/Kd1mEqg3)
# Responsive Branching

In this week's prep, you completed a responsive grid design that uses two "breakpoints" to distinguish three layouts for a page. In this lab, you will continue with the same code base (but you should start from our version available here).

## but first, BRANCHES!

**I highly recommend you try to use [SourceTree](https://www.sourcetreeapp.com/) (unless you're on Linux where it's unavailable) for this.**
Alternatives include VS Code and GitHub Desktop.

1. Pair up!
2. Accept the github classroom link for this assignment
    1. (coordinate with your partner so that you both end up win the same team in github classroom)
2. You will each pick a different task/feature to work on:
    1. Tiny Grid - make the grid have an even smaller responsive breakpoint
    2. Dark Mode - implement a dynamic dark mode style using media queries
3. Make a branch with a name based on the feature you are implementing (either `feat/tiny-grid` or `feat/dark-mode`)
    1. On your computers, you should each [make a new "branch" and switch to it](https://www.atlassian.com/git/tutorials/using-branches/git-checkout):
        1. This is usually a two step process - `git branch NEW_BRANCH_NAME` and then `git checkout NEW_BRANCH_NAME`
        1. You can also do it in one step - `git checkout -b NEW_BRANCH_NAME`
    2. A Git GUI client should make this easy!
    3. Make sure you switch to (checkout) the branch!
4. Push your new branch to the github repo in a remote branch with a matching name
    1. You should be able to see the branch on the GitHub website!
5. Follow the instructions for your feature: [Tiny Grid](#tiny-grid) or [Dark Mode](#dark-mode)
    1. When complete, commit the changes **to your branch** and push your branch (again) to GitHub
    2. Verify that GitHub shows your work in your branch
6. When you're done, work together to merge both of your branches into main on one of your computers, then push the code to main.
    1. You can either do a:
        1. Sequential Merge - Run `git checkout main` then run `git merge feat/tiny-grid` and then run `git merge feat/dark-mode`
        2. Octopus Merge - Run `git checkout main` then run `git merge feat/tiny-grid feat/dark-mode` to merge everything simultaneously
    1. Fix any merge conflicts that could arise by editing the code (recommend using a "merge tool") to make a version of the code with both features.
    1. See [git merge](https://www.atlassian.com/git/tutorials/using-branches/git-merge)
7. Submit the assignment by getting the link to the most recent commit in main that has both branches' changes merged in and submitting it to Canvas (it should look something like `https://github.com/343F25/responsive-branching-somethingsomething/commit/f265morestuffinhere`)

## Tiny Grid

Add in a 3rd breakpoint to now have a 4th layout for the page: a "tiny" layout.

### Helpful Resources:
* https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids
* https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries#targeting_media_features 

### Steps
1. accept the github classroom assignment linked from your canvas course
    * in doing so, tell github classroom that you're in a group with your neighbor
1. both you and your neighbor: clone the repository to your local machines
1. Replace the fake name (Nay Bored) at the bottom in the `README.md`'s Acknowledgements section with your own name.
1. add the README.md changes to the staging area, commit the changes, and push the changes to the remote repository.
1. edit the tiny.css such that when the viewport width is less than 375px, the layout changes such that only the "main article area" is displayed.
    1. Use your browser's developer tools to shrink the viewport! Just resizing the browser window won't be small enough.
    2. Scroll down; do you see other things "bunched up" in the bottom right?
        1. Write another CSS rule in your media query to select these other sections and hide them (`display: none`)! 
1. add the tiny.css changes to the staging area, commit the changes, and push the changes to the remote repository.

## Dark Mode

### Helpful Resources:
* https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme

To handle the "anchor links", you'll need to include an ev parameter in your event listener, and then call ev.preventDefault();

1. Create a new file called `dark.css`
1. edit your `index.html` to include a link to `dark.css` in the `head` of the document just before it links to `debug.css`
1. edit `dark.css` to add a rule for `.dark` and a rule for `.light`
    1. Make it so that, if the body has the `dark` class, it will have a dark background and a light foreground.
    1. If the body has the `light` class applied to it, it should have a light backgroudn and a dark foreground.
    1. What exact colors to use? Follow your heart! Colors are great too.
    2. Think of these two classes as an "override" -- if either is set, it overrides the user's color preference
1. Test your styles by adding either the `light` or `dark` class to your `<body>` element and see if it changes color
    1. Before continuing, remove all classes from the `<body>`.
1. Now, edit `dark.css` such that if the user has a "dark" preference, the page will be styled with a dark theme.
    1. Write two media queries that use the `prefers-color-scheme` query (linked in Helpful Resources)
    1. If the preference is for light, style the body the same as the light class you did before.
    1. If the preference is for dark, style the body the same as the dark class you did before.
1. add a javascript file called script.js and a script tag to the bottom of the body of the html file that loads `script.js`.
1. in `script.js`, add an event listener such that when the user clicks any of the 3 nav items, the page will render with the selected color scheme.
    1. The first thing you should do is call `ev.preventDefault()` ([see example](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault#blocking_default_click_handling)) or else the page will refresh instead of apply dark mode.
    1. Right now, it's difficult to get each link element... it would be nice if they each had a unique id...
    1. most often, dynamic styling is best implemented via (a) defining style rules for corresponding classes in css and (b) adding/removing classes to the necessary elements dynamically
    1. Think about this:
        1. If the user clicks on the "Dark Mode" link, it should override body to display with a dark theme... add the `dark` class!
        2. But now, if the user clicks on the "Light Mode" link, adding the `light` class means that the `<body>` contains both... you should remove the other class before adding `light`!
            1. Edit your "Dark Mode" link event handler to also remove the other class.
        4. If the user clicks on "OS Default", you shouldn't have any overrides on the `<body>`... remove all the classes.

# Acknowledgements

Developers:
1. Nay Bored

With huge thanks to the ~~CS 343 cheat code~~ [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Realizing_common_layouts_using_grids#a_responsive_layout_with_1_to_3_fluid_columns_using_grid-template-areas).
