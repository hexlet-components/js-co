
> hexlet-co@0.0.3 documentation /Users/mokevnin/projects/js-co
> documentation "build" "src/index.js" "-f" "md"

# co

Generator based control flow

**Examples**

```javascript
co(function* () {
   const result = yield Promise.resolve(true);
   return result;
 }).then(value => {
   console.log(value);
 }, err => {
   console.error(err.stack);
 });
```
