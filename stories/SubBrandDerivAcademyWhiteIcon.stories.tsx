import type { Meta, StoryObj } from '@storybook/react';

import { SubBrandDerivAcademyWhiteIcon } from '../src/react/Logo';

const meta = {
  title: 'Logo/SubBrandDerivAcademyWhiteIcon',
  component: SubBrandDerivAcademyWhiteIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SubBrandDerivAcademyWhiteIcon>;

export default meta;

type Story = StoryObj<typeof SubBrandDerivAcademyWhiteIcon>;

export const Primary: Story = {
  args: {
    width: '128px',
    height: '128px',
  },
};
