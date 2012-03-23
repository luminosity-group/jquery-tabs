# jQuery Tabs
Simple tabs plugin for jQuery.

**Features**

* Updates `window.location.hash` when a tab is activated.
* Activating a tab on window load based in the content of `window.location.hash`

## Setup
Use the following markup:

```html
<div class="tabs">
    <ul class="tabs_nav">
        <li rel="#cats">Cats</li>
        <li rel="#dogs">Dogs</li>
    </ul>
    <div class="tabs_content">
        <div id="cats">
            I LOVE CATS!
        </div>
        <div id="dogs">
            I LOVE DOGS!
        </div>
    </div>
</div>
```

## Running the specs
To run the specs with selenium and firefox:

```bash
$ rake
```
