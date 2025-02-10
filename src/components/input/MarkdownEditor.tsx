import { memo } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Box } from "@mui/material";
import { MarkdownEditorProps } from "../module";

const MarkdownEditor = ({
  value,
  setValue,
  nameKey,
  invalidFields,
  setInvalidFields,
  disabled,
  placeholder,
}: MarkdownEditorProps) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Editor
        disabled={disabled}
        apiKey="xyi00zjbbx7nkmw3y5nbk6pcpp21ab7fmi2k6wnbqyph4im5"
        initialValue={value}
        init={{
          skin: "snow",
          icons: "thin",
          placeholder: placeholder,

          height: 500,
          menubar: true,
          plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen textcolor ",
            "insertdatetime media table paste code help wordcount",
          ],
          textcolor_rows: "4",

          toolbar:
            "undo redo | styleselect | fontsizeselect| code | bold italic | alignleft aligncenter alignright alignjustify | outdent indent ",
        }}
        onChange={(e) =>
          setValue((prev: any) => ({
            ...prev,
            [nameKey]: e.target.getContent(),
          }))
        }
        onFocus={() => setInvalidFields && setInvalidFields([])}
      />
      {invalidFields?.some((el: any) => el.name === nameKey) && (
        <small>
          {invalidFields?.find((el: any) => el.name === nameKey)?.mesage}
        </small>
      )}
    </Box>
  );
};
export default memo(MarkdownEditor);
