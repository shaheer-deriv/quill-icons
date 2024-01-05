import type { Meta, StoryObj } from '@storybook/react';

import { LightFastExecutionIcon } from '../src/react/Illustration';

const meta = {
  title: 'Illustrations/LightFastExecutionIcon',
  component: LightFastExecutionIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LightFastExecutionIcon>;

export default meta;

type Story = StoryObj<typeof LightFastExecutionIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
