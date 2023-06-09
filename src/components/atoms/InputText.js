import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {styles, color} from '../../utils/styles';

function InputText({
  myHeight,
  textRight,
  value,
  placeholder,
  disabled,
  onChangeText,
  returnKeyType,
  refInput,
  secureTextEntry,
  onKeyPress,
  onSubmitEditing,
  multiline,
  onBlur,
  onFocus,
  keyboardType,
  autoComplete,
}) {
  return (
    <TextInput
      style={stylesCust.input(
        textRight,
        multiline ? 'top' : 'center',
        myHeight,
      )}
      value={value}
      editable={!disabled}
      placeholder={placeholder}
      placeholderTextColor={color.tgrey3}
      onChangeText={onChangeText}
      returnKeyType={returnKeyType}
      ref={refInput}
      secureTextEntry={secureTextEntry}
      onKeyPress={onKeyPress}
      onSubmitEditing={onSubmitEditing}
      multiline={multiline}
      numberOfLines={multiline ? 4 : 2}
      onBlur={onBlur}
      onFocus={onFocus}
      keyboardType={keyboardType}
      autoComplete={autoComplete}
    />
  );
}

const stylesCust = StyleSheet.create({
  input: (textRight = 'left', textAlignVertical = 'center', height = 40) => ({
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    flex: 1,
    paddingVertical: 10,
    height: height,
    textAlign: textRight,
    color: color.tblack,
    textAlignVertical: textAlignVertical,
  }),
});

export default InputText;
