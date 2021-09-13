import React, { useMemo, useState } from 'react';
// import { Content, SelectorContainer, SelectorDropdown } from './styles';
import { Option } from './Option';
import { BaseInput } from '../Form/BaseInput';
import { Dropdown } from '../Dropdown';

export interface SelectorProps {
  /**
   * 默认选中项
   */
  defaultValue: string;
  /**
   * 选项列表
   */
  options: string[];
  /**
   * 当改变选择状态时的回调
   * @param index 选中项索引
   * @param value 选中项内容
   */
  onChange: (index: number, value: string) => void;
}

export function Selector(props: SelectorProps) {
  const { options, defaultValue, onChange } = props;
  // const [show, setShow] = useState<boolean>(false);
  const [value, setValue] = useState<string>(defaultValue);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  // const hideDropdown = () => {
  //   setShow(false);
  // };
  // const showDropdown = () => {
  //   setShow(true);
  // };
  // const style = useMemo(() => {
  //   return {
  //     transform: show ? 'scaleY(1) translateY(50px)' : 'scaleY(0) translateY(50px)',
  //   };
  // }, [show]);
  const dropdown = useMemo(() => {
    return options.map((value, index) => {
      const onClick = () => {
        setValue(value);
        onChange(index, value);
        // setShow(false);
        setSelectedIndex(index);
      };
      return (
        <Option
          key={`${value}`}
          selected={selectedIndex === index}
          value={value}
          onClick={onClick}
        />
      );
    });
  }, [onChange, options, selectedIndex]);
  return (
    <Dropdown overlay={dropdown} >
      <BaseInput value={value} readonly />
    </Dropdown>
  );
  // return (
  //
  //   <SelectorContainer>
  //     <Content onClick={showDropdown}><BaseInput value={value} readonly /></Content>
  //     <SelectorDropdown style={style} onBlur={hideDropdown} onClick={hideDropdown}>
  //       {dropdown}
  //     </SelectorDropdown>
  //   </SelectorContainer>
  // );
}
