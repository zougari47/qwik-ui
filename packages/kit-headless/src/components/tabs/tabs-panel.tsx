import {
  component$,
  useContext,
  useSignal,
  useVisibleTask$,
  useId,
  Slot,
  useTask$,
  useComputed$,
} from '@builder.io/qwik';
import { tabsContextId } from './tabs-context-id';

export interface TabPanelProps {
  class?: string;
}

// Tab Panel implementation
export const TabPanel = component$(({ ...props }: TabPanelProps) => {
  const { class: classNames, ...rest } = props;
  const contextService = useContext(tabsContextId);
  const uniqueId = useId();

  const currentPanelIndex = useSignal(0);

  const isSelectedSignal = useComputed$(
    () => contextService.selectedIndex.value === currentPanelIndex.value
  );

  useTask$(({ cleanup }) => {
    contextService.tabsChanged$();

    cleanup(() => {
      contextService.tabsChanged$();
    });
  });

  useTask$(({ track }) => {
    track(contextService.indexByTabPanelId);
    currentPanelIndex.value = contextService.indexByTabPanelId[uniqueId];
  });

  return (
    <div
      data-tabpanel-id={uniqueId}
      id={'tabpanel-' + currentPanelIndex.value}
      role="tabpanel"
      tabIndex={0}
      aria-labelledby={`tab-${currentPanelIndex}`}
      class={`${isSelectedSignal.value ? 'is-hidden' : ''}${
        classNames ? ` ${classNames}` : ''
      }`}
      style={isSelectedSignal.value ? 'display: block' : 'display: none'}
      {...rest}
    >
      <p>thisPanelIndex.value: {currentPanelIndex.value} </p>
      <p>contextService.selectedIndex: {contextService.selectedIndex} </p>
      <Slot />
    </div>
  );
});
