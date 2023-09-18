import type { Meta, StoryObj } from '@storybook/react';

import { IllustrativeLicensedAndRegulatedIcon } from '../src/react/Illustrative';

const meta = {
  title: 'illustrative/IllustrativeLicensedAndRegulatedIcon',
  component: IllustrativeLicensedAndRegulatedIcon,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    fill: { control: { type: 'color' } },
    iconSize: {
      control: {
        type: 'radio',
      },
      options: ['sm', 'md', 'lg', 'xl', '2xl'],
      defaultValue: 'md',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof IllustrativeLicensedAndRegulatedIcon>;

export default meta;

type Story = StoryObj<typeof IllustrativeLicensedAndRegulatedIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
