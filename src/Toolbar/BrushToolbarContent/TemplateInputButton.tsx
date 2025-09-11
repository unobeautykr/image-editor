import { useState, useCallback } from 'react';
import { observer } from 'mobx-react';
import { ToolbarButton as _ToolbarButton } from '../ToolbarButton';
import { useImageEditor } from '~/ImageEditor';
import { useTool } from '~/ImageEditor';
import { ToolName } from '~/EditorCore';
import { TextBoilerplatePopup } from '../TextBoilerplatePopup';
import { BoilerplateData } from '~/types';
import { ToolbarButton } from './SimpleInputButton.styled';
import { CustomerTemplateIcon } from '~/icons/CustomerTemplateIcon';

export const TemplateInputButton = observer(() => {
  const { core, boilerplate } = useImageEditor();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
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
    core.addText(message, { shaking: true }, true);
    setTool(ToolName.PAN);
  };

  const onClickTextBoilerplate = async (
    event: React.MouseEvent<HTMLElement>
  ) => {
    if (!boilerplate || (boilerplate && !boilerplate[0])) return;

    const target = event.currentTarget;
    await loadTextList();
    setAnchorEl(target);
  };

  const onClose = () => {
    setAnchorEl(null);
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
      <TextBoilerplatePopup
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={onClose}
        onSelect={onSelectTextBoilerplate}
        boilerplates={textBoilerplates}
      />
    </div>
  );
});
