/**
 * Game Settings: Directory
 */

class ImagePicker extends FilePicker {
    constructor(options = {}) {
      super(options);
    }
  
    _onSubmit(event) {
      event.preventDefault();
      const path = event.target.file.value;
      const activeSource = this.activeSource;
      const bucket = event.target.bucket ? event.target.bucket.value : null;
      this.field.value = ImagePicker.format({
        activeSource,
        bucket,
        path,
      });
      this.close();
    }
  
    static async uploadToPath(path, file) {
      const options = DirectoryPicker.parse(path);
      return FilePicker.upload(options.activeSource, options.current, file, { bucket: options.bucket });
    }
  
    // returns the type "Directory" for rendering the SettingsConfig
    static Image(val) {
      return val;
    }
  
    // formats the data into a string for saving it as a GameSetting
    static format(value) {
      return value.bucket !== null
        ? `[${value.activeSource}:${value.bucket}] ${value.path}`
        : `[${value.activeSource}] ${value.path}`;
    }
  
    // parses the string back to something the FilePicker can understand as an option
    static parse(str) {
      let matches = str.match(/\[(.+)\]\s*(.+)/);
      if (matches) {
        let source = matches[1];
        const current = matches[2].trim();
        const [s3, bucket] = source.split(":");
        if (bucket !== undefined) {
          return {
            activeSource: s3,
            bucket: bucket,
            current: current,
          };
        } else {
          return {
            activeSource: s3,
            bucket: null,
            current: current,
          };
        }
      }
      // failsave, try it at least
      return {
        activeSource: "data",
        bucket: null,
        current: str,
      };
    }
  
    // Adds a FilePicker-Simulator-Button next to the input fields
    static processHtml(html) {
      $(html)
        .find(`input[data-dtype="Image"]`)
        .each(function () {
          if (!$(this).next().length) {
            let picker = new ImagePicker({
              field: $(this)[0],
              ...ImagePicker.parse(this.value),
            });
            // data-type="image" data-target="img"
            let pickerButton = $(
              '<button type="button" class="file-picker" title="Pick image"><i class="fas fa-file-import fa-fw"></i></button>'
            );
            pickerButton.on("click", function () {
              picker.render(true);
            });
            $(this).parent().append(pickerButton);
          }
        });
    }
  
    /** @override */
    activateListeners(html) {
      super.activateListeners(html);
  
      // remove unnecessary elements
      $(html).find("footer button").text("Select Image");
    }
  }
  
  Hooks.on("renderSettingsConfig", (app, html, user) => {
    ImagePicker.processHtml(html);
  });
  
  export default ImagePicker;
  