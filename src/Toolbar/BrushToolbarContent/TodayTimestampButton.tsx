import { ToolbarButton } from '../ToolbarButton';
import { TimestampToolIcon } from '~/icons/TimestampToolIcon';
import { useImageEditor } from '~/ImageEditor';
import { format } from 'date-fns';

export function TodayTimestampButton() {
  const { core } = useImageEditor();
  const onClick = (e: any) => {
    const today = new Date();
    core.addText(format(today, 'yyyy-MM-dd'), undefined, true);
  };

  return (
    <ToolbarButton
      disableToolbar={true}
      Icon={TimestampToolIcon}
      onClick={onClick}
      tooltip="오늘날짜"
    />
  );
}
