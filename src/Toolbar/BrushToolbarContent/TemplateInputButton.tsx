import { useState, useCallback } from 'react';
import { observer } from 'mobx-react';
import { ToolbarButton as _ToolbarButton } from '../ToolbarButton';
import { useImageEditor } from '~/ImageEditor';
import { useTool } from '~/ImageEditor';
import { ToolName } from '~/EditorCore';
import { TextBoilerplateDialog } from '../TextBoilerplateDialog';
import { BoilerplateData } from '~/types';
import { ToolbarButton } from './SimpleInputButton.styled';
import { CustomerTemplateIcon } from '~/icons/CustomerTemplateIcon';

export const TemplateInputButton = observer(() => {
  const { core, boilerplate } = useImageEditor();
  const [openTextBoilerplate, setOpenTextBoilerplate] = useState(false);
  const [textBoilerplates, setTextBoilerplates] = useState<BoilerplateData[]>(
    []
  );
  const { tool, setTool } = useTool();
  const selected = tool === ToolName.SIMPLE_INPUT;

  const loadTextList = useCallback(async () => {
    if (!boilerplate?.[2]?.onLoadBoilerplate) return;
    const data = await boilerplate[2].onLoadBoilerplate();
    setTextBoilerplates(data);
  }, [boilerplate]);

  const onSelectTextBoilerplate = (message: string) => {
    core.addText(message, undefined, true);
    setOpenTextBoilerplate(false);
    setTool(ToolName.PAN);
  };

  const onClickTextBoilerplate = async () => {
    if (!boilerplate || (boilerplate && !boilerplate[0])) return;
    await loadTextList();
    setOpenTextBoilerplate((v) => !v);
  };

  return (
    <div style={{ position: 'relative' }}>
      <ToolbarButton
        selected={selected}
        disableToolbar={true}
        Icon={CustomerTemplateIcon}
        onClick={onClickTextBoilerplate}
        tooltip="고객정보 입력"
      />
      <TextBoilerplateDialog
        open={openTextBoilerplate}
        onClose={() => {
          setOpenTextBoilerplate(false);
        }}
        onSelect={onSelectTextBoilerplate}
        boilerplates={textBoilerplates}
      />
    </div>
  );
});
