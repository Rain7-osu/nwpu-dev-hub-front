import React, { BaseSyntheticEvent, useCallback, useState } from 'react';
import { RegisterContainer, FormContainer, FormRow, GenderContainer, IntentionGroup, FormRowTitle, ErrorText } from './styles';
import { Input } from '../../components/Input';
import { Icon } from '../../components/Icon';
import cls from 'classnames';
import { BaseTextarea } from '../../components/Input/BaseTextarea';
import { Button } from '../../components/Button';
import { fetchRegister } from '../../api/fetchRegister';
import { fetchEmailCode } from '../../api/fetchEmailCode';
import { fetchCheckEmail } from '../../api/fetchCheckEmail';
import { modal } from '../../components/Modal';

export enum Gender {
  NONE= -1,
  MAN = 0,
  WOMAN = 1, 
}

export enum Intention {
  NONE = -1,
  APP = 0,
  WEB = 1,
  MINI = 2,
  UI = 3,
  OPERATE = 4,
}

export function Register() {
  const [name, setName] = useState<string>('');
  const [nameErr, setNameErr] = useState<string>('');
  const [genderSelectedIndex, setGenderSelectedIndex] = useState<Gender>(-1);
  const [genderErr, setGenderErr] = useState<string>('');
  const [school, setSchool] = useState<string>('');
  const [schoolErr, setSchoolErr] = useState<string>('');
  const [grade, setGrade] = useState<string>('');
  const [gradeErr, setGradeErr] = useState<string>('');
  const [intentionIndex, setIntentionIndex] = useState<Intention>(-1);
  const [intentionGroupErr, setIntentionGroupErr] = useState<string>('');
  const [experience, setExperience] = useState<string>('');
  const [other, setOther] = useState<string>('');
  const [qq, setQq] = useState<string>('');
  const [qqErr, setQqErr] = useState<string>('');
  const [wechat, setWechat] = useState<string>('');
  const [wechatErr, setWechatErr] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [emailErr, setEmailErr] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [codeErr, setCodeErr] = useState<string>('');
  const [disableCode, setDisableCode] = useState<boolean>(false);
  const [codeRemainTime, setCodeRemainTime] = useState<number>(60);
  
  const validateCode = useCallback((): boolean => {
    if (!/^[A-z0-9]{6}$/.test(code)) {
      setCodeErr('验证码不正确！');
      return false;
    } else {
      setCodeErr('');
      return true;
    }
  }, [code]);
  
  const validateName = useCallback((): boolean => {
    if (!/^[\u4E00-\u9FA5A-Za-z]+$/.test(name)) {
      setNameErr('请正确填写姓名！');
      return false;
    } else {
      setNameErr('');
      return true;
    }
  }, [name]);
  
  const validateGender = useCallback((): boolean => {
    if (genderSelectedIndex === -1) {
      setGenderErr('请选择性别！');
      return false;
    } else {
      setGenderErr('');
      return true;
    }
  }, [genderSelectedIndex]);

  const validateSchool = useCallback((): boolean => {
    if (school.length <= 0) {
      setSchoolErr('请填写学院！');
      return false;
    } else {
      setSchoolErr('');
      return true;
    }
  }, [school]);

  const validateGrade = useCallback((): boolean => {
    if (grade.length <= 0 || !/^\d\d\d\d级(本科|硕士|博士)/.test(grade)) {
      setGradeErr('请正确填写年级！');
      return false;
    } else {
      setGradeErr('');
      return true;
    }
  }, [grade]);

  const validateIntentionGroup = useCallback((): boolean => {
    if (intentionIndex === -1) {
      setIntentionGroupErr('请选择意向组别！');
      return false;
    } else {
      setIntentionGroupErr('');
      return true;
    }
  }, [intentionIndex]);

  const validateQq = useCallback((): boolean => {
    if (qq && !/^[1-9][0-9]{4,12}$/.test(qq)) {
      setQqErr('请输入正确的QQ！');
      return false;
    } else {
      setQqErr('');
      return true;
    }
  }, [qq]);

  const validateWechat = useCallback((): boolean => {
    if (wechat && !/^[a-zA-Z][a-zA-Z\d_-]{5,19}$/.test(wechat)) {
      setWechatErr('微信号格式不正确！');
      return false;
    } else {
      setWechatErr('');
      return true;
    }
  }, [wechat]);

  const validateEmail = useCallback((): boolean => {
    if (!/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(email)) {
      setEmailErr('请输入正确的邮箱！');
      return false;
    } else {
      setEmailErr('');
      return true;
    }
  }, [email]);

  const handleInputName = useCallback((e: BaseSyntheticEvent) => {
    setName(e.target.value);
  }, [setName]);

  const handleSelectMan = useCallback(() => {
    setGenderSelectedIndex(0);
  }, [setGenderSelectedIndex]);

  const handleSelectWoman = useCallback(() => {
    setGenderSelectedIndex(1);
  }, [setGenderSelectedIndex]);

  const handleInputSchool = useCallback((e: BaseSyntheticEvent) => {
    setSchool(e.target.value);
  }, [setSchool]);

  const handleInputGrade = useCallback((e: BaseSyntheticEvent) => {
    setGrade(e.target.value);
  }, [setGrade]);

  const handleChooseGroup = useCallback((e: BaseSyntheticEvent) => {
    const index = +e.target.parentNode.parentNode.dataset.index;
    if (index > 4 || index < -1) {
      return;
    }
    setIntentionIndex(index as Intention);
  }, [setIntentionIndex]);

  const handleInputExperience = useCallback((e) => {
    const value = e.target.value;
    setExperience(value);
  }, [setExperience]);

  const handleInputOther = useCallback((e) => {
    const value = e.target.value;
    setOther(value);
  }, [setOther]);

  const handleInputQq = useCallback((e) => {
    const value = e.target.value;
    setQq(value);
  }, [setQq]);

  const handleInputWechat = useCallback((e) => {
    const value = e.target.value;
    setWechat(value);
  }, [setWechat]);

  const handleInputEmail = useCallback((e) => {
    const value = e.target.value;
    setEmail(value);
  }, [setEmail]);

  const handleInputCode = useCallback((e) => {
    const value = e.target.value;
    setCode(value);
  }, []);
  
  const handleSendCode = useCallback(() => {
    if (!validateEmail()) {
      return;
    }
    setDisableCode(true);
    {
      let remainTime = 60;
      const timer = setInterval(() => {
        if (remainTime <= 0) {
          clearInterval(timer);
          setCodeRemainTime(60);
          setDisableCode(false);
          return;
        }
        remainTime--;
        setCodeRemainTime(remainTime);
      }, 1000);
    }
    fetchEmailCode({
      email,
      name,
      willGroup: intentionIndex,
    }).then(() => {
      modal.show({
        title: '邮件已发送',
        content: '邮件已发送，请注意查收！',
      });
    }).catch((err) => {
      modal.show({
        title: '错误',
        content: err,
      });
    });
  }, [email, intentionIndex, name, validateEmail]);
  
  const handleCheckEmail = useCallback(() => {
    if (!validateEmail()) {
      return;
    }
    fetchCheckEmail(
      email,
    ).catch((err) => {
      setEmailErr(err);
    });
  }, [email, validateEmail]);

  const handleShowModal = useCallback(() => {
    modal.show({
      title: '错误',
      content: (
        <>
          {nameErr && <ErrorText>{nameErr}</ErrorText>}
          {genderErr && <ErrorText>{genderErr}</ErrorText>}
          {schoolErr && <ErrorText>{schoolErr}</ErrorText>}
          {gradeErr && <ErrorText>{gradeErr}</ErrorText>}
          {intentionGroupErr && <ErrorText>{intentionGroupErr}</ErrorText>}
          {qqErr && <ErrorText>{qqErr}</ErrorText>}
          {wechatErr && <ErrorText>{wechatErr}</ErrorText>}
          {emailErr && <ErrorText>{emailErr}</ErrorText>}
          {codeErr && <ErrorText>{codeErr}</ErrorText>}
        </>
      ),
    });
  }, [
    nameErr,
    genderErr,
    schoolErr,
    gradeErr,
    intentionGroupErr,
    qqErr,
    wechatErr,
    emailErr,
    codeErr,
  ]);

  const handleSubmit = useCallback(() => {
    let validate = true;
    validate = validateName() && validate;
    validate = validateGender() && validate;
    validate = validateSchool() && validate;
    validate = validateGrade() && validate;
    validate = validateIntentionGroup() && validate;
    validate = validateQq() && validate;
    validate = validateWechat() && validate;
    validate = validateEmail() && validate;
    validate = validateCode() && validate;
    if (!validate) {
      handleShowModal();
      return;
    }

    const sp = grade.split('级');
    const qualification = ['本科', '硕士', '博士'].indexOf(sp[1]) as 0 | 1 | 2 | -1;

    fetchRegister({
      name,
      gender: genderSelectedIndex === 0,
      department: school,
      grade: sp[0],
      qualification,
      willGroup: intentionIndex,
      email,
      code,
      qq,
      wechat,
      personalExperience: experience,
      parenthetical: other,
    }).then(() => {
      modal.show({
        title: '成功',
        content: '报名成功',
      });
    }).catch((err) => {
      modal.show({
        title: '错误',
        content: err,
      });
    });
  }, [
    handleShowModal,
    validateName,
    validateGender,
    validateSchool,
    validateGrade,
    validateIntentionGroup,
    validateQq,
    validateWechat,
    validateEmail,
    validateCode,
    grade,
    name,
    genderSelectedIndex,
    school,
    intentionIndex,
    email,
    code,
    qq,
    wechat,
    experience,
    other,
  ]);

  const renderGenderInput = useCallback(() => {
    const ICON_SIZE = 45;

    return (
      <GenderContainer>
        <div className="gender-wrapper" onClick={handleSelectMan}>
          <Icon width={ICON_SIZE} height={ICON_SIZE} type={genderSelectedIndex === 0 ? 'man': 'man_gray'} />
        </div>
        <div className="gender-wrapper" onClick={handleSelectWoman}>
          <Icon width={ICON_SIZE} height={ICON_SIZE} type={genderSelectedIndex === 1 ? 'woman': 'woman_gray'} />
        </div>
      </GenderContainer>
    );
  }, [handleSelectMan, handleSelectWoman, genderSelectedIndex]);

  const renderChooseGroup = useCallback(() => {
    const groupIconProps = {
      width: 80,
      height: 80,
    };
    
    return (
      <IntentionGroup onClick={handleChooseGroup}>
        <div className={cls('intention-wrapper', { 'chosen': intentionIndex === 0 })} data-index={0}>
          <Icon {...groupIconProps} type={'app_group'} />
        </div>
        <div className={cls('intention-wrapper', { 'chosen': intentionIndex === 1 })} data-index={1}>
          <Icon {...groupIconProps} type={'web_group'} />
        </div>
        <div className={cls('intention-wrapper', { 'chosen': intentionIndex === 2 })} data-index={2}>
          <Icon {...groupIconProps} type={'mini_group'} />
        </div>
        <div className={cls('intention-wrapper', { 'chosen': intentionIndex === 3 })} data-index={3}>
          <Icon {...groupIconProps} type={'ui_group'} />
        </div>
        <div className={cls('intention-wrapper', { 'chosen': intentionIndex === 4 })} data-index={4}>
          <Icon {...groupIconProps} type={'operate_group'} />
        </div>
      </IntentionGroup>
    );
  }, [handleChooseGroup, intentionIndex]);

  return (
    <RegisterContainer>
      <div className="top-title"><span>Dev Hub 报名表</span></div>
      <FormContainer>
        <FormRow>
          <Input
            label="姓名"
            placeholder="请输入姓名"
            required
            value={name}
            errMsg={nameErr}
            onInput={handleInputName}
          />
          <Input label="性别" required render={renderGenderInput} errMsg={genderErr} />
        </FormRow>
        <FormRow>
          <Input
            label="学院"
            placeholder="请输入学院"
            required
            value={school}
            errMsg={schoolErr}
            onInput={handleInputSchool}
          />
          <Input
            label={
              <>
                年级  <span style={{ color: 'gray' }}>如：2018级本科、2020级硕士、2019级博士</span>
              </>
            }
            placeholder="请输入年级"
            required
            value={grade}
            errMsg={gradeErr}
            onInput={handleInputGrade}
          />
        </FormRow>
        <FormRow>
          <Input
            label="意向组别"
            required
            render={renderChooseGroup}
            errMsg={intentionGroupErr}
          />
        </FormRow>
        <FormRow><FormRowTitle>联系方式</FormRowTitle></FormRow>
        <FormRow>
          <Input
            label="qq"
            value={qq}
            onInput={handleInputQq}
            errMsg={qqErr}
          />
          <Input
            label="微信"
            value={wechat}
            onInput={handleInputWechat}
          />
        </FormRow>
        <FormRow>
          <Input
            label="邮箱"
            required
            value={email}
            onInput={handleInputEmail}
            onBlur={handleCheckEmail}
            errMsg={emailErr}
          />
          <div className="send-code">
            <Button
              style={{ width: 160 }}
              extClass="btn"
              disabled={disableCode}
              onClick={handleSendCode}
            >
              { disableCode? `${codeRemainTime}s 后再次发送` : '发送验证码'}
            </Button>
            <Input
              label="邮箱验证码"
              required
              value={code}
              onInput={handleInputCode}
              errMsg={codeErr}
            />
          </div>
        </FormRow>
        <FormRow>
          <Input
            label="个人经历"
            render={() => {
              return (
                <BaseTextarea maxLength={520} value={experience} onInput={handleInputExperience} />
              );
            }}
          />
        </FormRow>
        <FormRow>
          <Input
            label="其他说明"
            render={() => {
              return (
                <BaseTextarea maxLength={520} value={other} onInput={handleInputOther} />
              );
            }}
          />
        </FormRow>
        <FormRow align="center">
          <Button
            type="warning"
            style={{ width: 140 }}
            onClick={handleSubmit}
          >
            提交
          </Button>
        </FormRow>
      </FormContainer>
    </RegisterContainer>
  );
}
