import type { Meta, StoryObj } from '@storybook/react';

import { FlagAntiguaAndBarbudaIcon } from '../src/react/Flag';

const meta = {
  title: 'Flags/FlagAntiguaAndBarbudaIcon',
  component: FlagAntiguaAndBarbudaIcon,
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
} satisfies Meta<typeof FlagAntiguaAndBarbudaIcon>;

export default meta;

type Story = StoryObj<typeof FlagAntiguaAndBarbudaIcon>;

export const Primary: Story = {
  args: {
    iconSize: '2xl',
    fill: 'black',
  },
};
