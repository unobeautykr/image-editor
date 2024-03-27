import { ReactComponent as EraserIcon } from '~/assets/icons/update_icon/ic_eraser.svg';
import { ReactComponent as ImageIcon } from '~/assets/icons/update_icon/ic_image.svg';
import { ReactComponent as PenIcon } from '~/assets/icons/update_icon/ic_pen.svg';
import { ReactComponent as MoveIcon } from '~/assets/icons/update_icon/ic_move.svg';
import { ReactComponent as RedoIcon } from '~/assets/icons/update_icon/ic_redo.svg';
import { ReactComponent as UndoIcon } from '~/assets/icons/update_icon/ic_undo.svg';
import { ReactComponent as HandIcon } from '~/assets/icons/update_icon/ic_hand.svg';
import { ReactComponent as BookmarkIcon } from '~/assets/icons/update_icon/ic_bookmark.svg';
import { ReactComponent as BookmarkIcon2 } from '~/assets/icons/update_icon/ic_bookmark_get.svg';
import { ReactComponent as TextIcon } from '~/assets/icons/update_icon/ic_text.svg';
import { ReactComponent as CalendarIcon } from '~/assets/icons/update_icon/ic_calendar.svg';
import { ReactComponent as PencilIcon } from '~/assets/icons/update_icon/ic_pencil.svg';
import { ReactComponent as FoldIcon } from '~/assets/icons/update_icon/fold_dark_16.svg';
import { ReactComponent as MoreIcon } from '~/assets/icons/update_icon/ic_more.svg';
import { ReactComponent as ArrowIcon } from '~/assets/images/arrow.svg';
import { ReactComponent as SaveLibraryIcon } from '~/assets/icons/update_icon/ic_Libraryadd.svg';
import { ReactComponent as BookmarkTextIcon } from '~/assets/icons/update_icon/ic_lib_text.svg';
import { ReactComponent as BookmarkImageIcon } from '~/assets/icons/update_icon/ic_lib_image.svg';
import { ReactComponent as DeleteIcon } from '~/assets/icons/update_icon/ic_delete_16.svg';
type IconProps = {
  variant:
    | 'eraser'
    | 'image'
    | 'pen'
    | 'move'
    | 'redo'
    | 'undo'
    | 'hand'
    | 'bookmark'
    | 'bookmark_2'
    | 'text'
    | 'calendar'
    | 'pencil'
    | 'fold'
    | 'more'
    | 'arrow'
    | 'library_add'
    | 'bookmark_text'
    | 'bookmark_image'
    | 'delete';
  width?: number;
  height?: number;
};
const Icon = ({ variant, ...rest }: IconProps) => {
  switch (variant) {
    case 'eraser':
      return <EraserIcon {...rest} />;
    case 'image':
      return <ImageIcon {...rest} />;
    case 'pen':
      return <PenIcon {...rest} />;
    case 'move':
      return <MoveIcon {...rest} />;
    case 'redo':
      return <RedoIcon {...rest} />;
    case 'undo':
      return <UndoIcon {...rest} />;
    case 'hand':
      return <HandIcon {...rest} />;
    case 'bookmark':
      return <BookmarkIcon {...rest} />;
    case 'bookmark_2':
      return <BookmarkIcon2 {...rest} />;
    case 'text':
      return <TextIcon {...rest} />;
    case 'calendar':
      return <CalendarIcon {...rest} />;
    case 'pencil':
      return <PencilIcon {...rest} />;
    case 'fold':
      return <FoldIcon {...rest} />;
    case 'more':
      return <MoreIcon {...rest} />;
    case 'arrow':
      return <ArrowIcon {...rest} />;
    case 'bookmark_text':
      return <BookmarkTextIcon {...rest} />;
    case 'bookmark_image':
      return <BookmarkImageIcon {...rest} />;
    case 'library_add':
      return <SaveLibraryIcon {...rest} />;
    case 'delete':
      return <DeleteIcon {...rest} />;
    default:
      return <></>;
  }
};

export default Icon;
